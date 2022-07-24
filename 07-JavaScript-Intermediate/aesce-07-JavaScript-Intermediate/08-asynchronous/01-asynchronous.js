/* eslint-disable implicit-arrow-linebreak */
// Soal 1
// 1. Apa itu synchronous?
/*
      - synchronous berarti berkesinambungan/bersamaan
      - proses selanjutnya dijalankan setelah proses sekarang selesai
*/
// 2. Apa itu asynchronous?
/*
      - asynchronous berarti tidak berkesinambungan/bersamaan
      - dapat melakukan proses selanjutnya ketika sedang melakukan suatu proses
*/
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
/*
      - bisa, dengan javascript Promise atau async-await
*/
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/*
      first log:  1
      first log:  2
      first log:  3
      first log:  4
      first log:  5
      second log:  1
      second log:  2
      second log:  3
      second log:  4
      second log:  5
*/
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua,
//    bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi?
/*
      - pertama berjalan secara berkelanjutan
      - kedua berjalan setelah ~100ms setelah pertama karena memakai setTimeout
 */
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama.
/*
      - sudah sesuai `expected result`
*/
for (let i = 1; i <= 5; i += 1) {
  console.log('first log: ', i); // 01 - Pertama
  setTimeout(() => console.log('second log: ', i), 100); // 02 - Kedua, 100);
}

// Soal 2
const isR18Plus = (age) =>
  new Promise((resolve, reject) => {
    if (age < 18) reject(new Error('anda masih dibawah umur'));
    if (age >= 18) resolve('anda sudah dewasa');
  });
const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underAge);
  console.log(properAge);
};

printR18Plus();
