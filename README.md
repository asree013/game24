วิธีการใช้งาน

  -ใช้งานตัวโค้ด 
    - พิมพ์คำสั้ง npm i
    - พิมพ์คำสั้ง npx prisma generate
    - พิมพ์คำสั้ง npx prisma migrate dev -name init
    - พิมพ์คำสั้ง npm run start:dev
    - ให้เข้า path http://localhost:3000/api/cheat24/(ตามด้วยตัวเลข4ตัว, 4567)
  -ใช้งานผ่าน docker
    - พิมพ์คำสั้ง docker compose docker-compose.yml -d up 
    - พิมพ์คำสั้ง npx prisma migrate deploy ในexecของ services game24
    - ให้เข้า path http://localhost:3000/api/cheat24/(ตามด้วยตัวเลข4ตัว, 4567)