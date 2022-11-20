Privy Test Frontend (Next.js)

List Page :
'/' : Halaman Login dan Register
'/profil' : Halaman lihat dan edit Profile (untuk edit profile klik icon edit)
'/career' : Halaman lihat dan edit Karir ( untuk menambahkan karir klik +)
'/education' : Halaman lihat dan edit Education ( untuk menambahkan karir klik +)
'/gallery' : Halaman untuk lihat dan tambah gambar gallery ( untuk menambahkan karir klik +)

catatan : ketika menambahkan data education atau data career, server justru mereplace, bukan menambah

Fitur Upload :

- Upload Cover, Profile Picture, dan Tambah Gallery.
- Cover dan Profile Picture Single File dan dapat di preview
- Gallery Multiple file dan dapat di preview sebelum diupload

catatan :

- ketika melakukan upload multiple images, memberikan respons 'image missing' kurang jelas dari api dokumentasi untuk endpoint multiple image yang mana
- ketika melakukan upload profil pic, tidak memberikan response gambar terbaru, alias tidak update

Fitur Login, Logout, Register

- User dapat melakukan register, resend otp, verifikasi OTP
- User dapat melakukan Log out
- User dapat melakukan log in

catatan :

-ketika logout menghasilkan error : Error connecting to Redis on 127.0.0.1:6379 (Errno::ECONNREFUSED)
-logout secara manual dengan cara hapus Cookies 'token dan 'isLoggedIn

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Langkah Jalankan Program

Development server:

```bash
yarn install
```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build App:

```bash
yarn build
```

```bash
yarn start
```

Technology : Next.js, Tailwind CSS + Sass, Redux
