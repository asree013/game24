import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(3000);
}
bootstrap();

// เพิ่มการรับสัญญาณ SIGTERM
process.on('SIGTERM', () => {
  // ทำลายการทำงานที่เหลือ เช่น ปิดการเชื่อมต่อฐานข้อมูลหรือทำการบันทึกข้อมูลก่อนปิดแอปพลิเคชัน
  process.exit(0); // สิ้นสุด process โดยกำหนด exit code เป็น 0
});