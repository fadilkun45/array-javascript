// struktur array
let IsiArray = ["kue","coklat","sayuran","roti"];
// memangil array tertentu
console.error("memangil array tertentu");
console.log(IsiArray[0]);
console.log(IsiArray[2]);
// memangil array secara berurutan
console.error("memangil array secara berurutan");
console.log(IsiArray);
// mengetahui isi suatu array
console.error("mengetahui isi suatu array");
console.log(IsiArray.length);
// tambah isi array di terakhir
console.error("tambah isi array di terakhir");
IsiArray.push('nasi');
console.log(IsiArray);
// tambah isi array di depan
console.error("tambah isi array di depan");
IsiArray.unshift('ayam goreng');
console.log(IsiArray);
// menghapus isi array di terkahir 
console.error("menghapus isi array di terkahir");
IsiArray.pop();
console.log(IsiArray);
// menghapus isi array di depan 
console.error("menghapus isi array di depan");
IsiArray.shift();
console.log(IsiArray);
// potong isi array tertentu untuk di pindahkan ke lain variabel
console.error("potong isi array tertentu");
let IsiArray2 = IsiArray.slice(0,2);
console.log(IsiArray2);
