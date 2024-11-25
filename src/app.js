import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import ventaRoutes from "./routes/venta.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
); //comunicaremos el backend con el frontend mediate cors
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ventaRoutes);

export default app;
