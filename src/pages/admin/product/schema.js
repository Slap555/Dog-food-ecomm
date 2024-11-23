import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.string().nonempty("Price is required"),
  stock: z.string().nonempty("Stock is required"),
  image: z.any().optional(),
  description: z.string().optional(),
});
