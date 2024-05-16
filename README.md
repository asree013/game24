วิธีการใช้งาน
  -การตั้งค่า
      - สร้างไฟล์ .env ให้ใส่พร็อพ DATABASE_URL="mysql://root:12345678@localhost:9999/game24"

  -ใช้งานแบบปกติ(Manual) 
    - พิมพ์คำสั้ง npm i
    - พิมพ์คำสั้ง npx prisma generate
    - พิมพ์คำสั้ง docker compose -f docker-compose.yml up -d mysql
    - พิมพ์คำสั้ง npx prisma migrate dev -name init
    - พิมพ์คำสั้ง npm run start:dev
    - ให้เข้า path http://localhost:3000/api/cheat24/(ตามด้วยตัวเลข4ตัว, 4567)
  -ใช้งานผ่าน docker
    - พิมพ์คำสั้ง docker compose docker-compose.yml -d up game24
    - ให้เข้า path http://localhost:3000/api/cheat24/(ตามด้วยตัวเลข4ตัว, 4567)