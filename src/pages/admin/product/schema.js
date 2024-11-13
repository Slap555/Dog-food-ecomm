import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.string().min(0, "Price must be a positive number"),
  stock: z.string().min(0, "Stock must be a non-negative number"),
  image: z.any().optional(),
  description: z.string().optional(),
});
