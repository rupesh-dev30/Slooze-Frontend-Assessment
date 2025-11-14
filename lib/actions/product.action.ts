"use server";

import Product from "@/database/product.model";
import { connectToDatabase } from "../mongoose";
import {
  ApiResponse,
  ProductDocument,
  ProductInput,
  PaginationParams,
} from "../shared.types";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { DecodedUser } from "@/proxy";

async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;
    return decoded.id;
  } catch {
    return null;
  }
}

export async function createProduct(
  data: ProductInput
): Promise<ApiResponse<ProductDocument>> {
  try {
    await connectToDatabase();

    const userId = await getUser();
    if (!userId) return { success: false, message: "Unauthorized user" };

    const product = await Product.create({
      ...data,
      user: userId,
    });

    return {
      success: true,
      message: "Product created successfully",
      data: {
        _id: product._id.toString(),
        user: product.user?.toString(),
        name: product.name,
        image: product.image,
        views: product.views,
        price: product.price,
        revenue: product.revenue,
        status: product.status,
        createdAt: product.createdAt?.toISOString(),
        updatedAt: product.updatedAt?.toISOString(),
      },
    };
  } catch (error) {
    console.error("Create Product Error:", error);
    return {
      success: false,
      message: "Failed to create product",
    };
  }
}

export async function getProducts(
  params: PaginationParams = {}
): Promise<ApiResponse<ProductDocument[]>> {
  try {
    await connectToDatabase();

    const { page = 1, limit = 10, status } = params;

    const userId = await getUser();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};

    if (status) query.status = status;

    // Extract role
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    let role: string | null = null;

    if (token) {
      try {
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET!
        ) as DecodedUser;
        role = decoded.role;
      } catch {}
    }

    // ROLE BASED PRODUCT FILTERING
    // Manager     → See all
    // StoreKeeper → See all
    // User        → Only own products
    if (role !== "manager" && role !== "store_keeper") {
      query.user = userId;
    }

    const skip = (page - 1) * limit;

    const products = await Product.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    return {
      success: true,
      data: products.map((p) => ({
        _id: p._id.toString(),
        user: p.user?.toString(),
        name: p.name,
        image: p.image,
        views: p.views,
        price: p.price,
        revenue: p.revenue,
        status: p.status,
        createdAt: p.createdAt?.toISOString(),
        updatedAt: p.updatedAt?.toISOString(),
      })),
      total: await Product.countDocuments(query),
      page,
      limit,
    };
  } catch (error) {
    console.error("Get Products Error:", error);

    return {
      success: false,
      message: "Failed to fetch products",
    };
  }
}

export async function updateProduct(
  id: string,
  data: Partial<ProductInput>
): Promise<ApiResponse<ProductDocument>> {
  try {
    await connectToDatabase();

    const userId = await getUser();
    if (!userId) return { success: false, message: "Unauthorized" };

    const product = await Product.findById(id);
    if (!product) return { success: false, message: "Product not found" };

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const decoded = jwt.verify(token!, process.env.JWT_SECRET!) as DecodedUser;
    const role = decoded.role;

    if (role !== "manager" && product.user.toString() !== userId) {
      return { success: false, message: "Permission denied" };
    }

    const updated = await Product.findByIdAndUpdate(id, data, { new: true });

    return {
      success: true,
      message: "Product updated successfully",
      data: {
        _id: updated!._id.toString(),
        user: updated!.user?.toString(),
        name: updated!.name,
        price: updated!.price,
        image: updated!.image,
        views: updated!.views,
        revenue: updated!.revenue,
        status: updated!.status,
        createdAt: updated!.createdAt?.toISOString(),
        updatedAt: updated!.updatedAt?.toISOString(),
      },
    };
  } catch (error) {
    console.error("Update Product Error:", error);
    return {
      success: false,
      message: "Failed to update product",
    };
  }
}

export async function deleteProduct(id: string) {
  try {
    await connectToDatabase();

    const userId = await getUser();
    if (!userId) return { success: false, message: "Unauthorized" };

    const product = await Product.findById(id);
    if (!product) return { success: false, message: "Product not found" };

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const decoded = jwt.verify(token!, process.env.JWT_SECRET!) as DecodedUser;
    const role = decoded.role;

    if (role !== "manager" && product.user.toString() !== userId) {
      return { success: false, message: "Permission denied" };
    }

    await Product.findByIdAndDelete(id);

    return {
      success: true,
      message: "Product deleted successfully",
    };
  } catch (error) {
    console.error("Delete Product Error:", error);
    return {
      success: false,
      message: "Failed to delete product",
    };
  }
}

export async function getProductById(
  id: string
): Promise<ApiResponse<ProductDocument>> {
  try {
    await connectToDatabase();

    const product = await Product.findById(id);

    if (!product) {
      return { success: false, message: "Product not found" };
    }

    return {
      success: true,
      data: {
        _id: product._id.toString(),
        user: product.user?.toString(),
        name: product.name,
        price: product.price,
        image: product.image,
        views: product.views,
        revenue: product.revenue,
        status: product.status,
        createdAt: product.createdAt?.toISOString(),
        updatedAt: product.updatedAt?.toISOString(),
      },
    };
  } catch (error) {
    console.error("Get Product By ID Error:", error);
    return { success: false, message: "Failed to fetch product" };
  }
}
