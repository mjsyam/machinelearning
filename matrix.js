class Matrix {
    constructor(baris, kolom) {
        this.baris = baris;
        this.kolom = kolom;
        this.matrix = [];

        for (let b = 0; b < this.baris; b++) {
            this.matrix[b] = [];
            for (let k = 0; k < this.kolom; k++) {
                this.matrix[b][k] = 0;
            }
        }
    }

    isiNilaiMatrixRandom() {
        for (let b = 0; b < this.baris; b++) {
            for (let k = 0; k < this.kolom; k++) {
                //console.log(Math.floor(Math.random() * 100));
                this.matrix[b][k] = Math.floor(Math.random() * 10);
            }
        }
        console.table(this.matrix);
    }

    perkalian(a) {
        if(this.kolom !== a.baris){
            console.log("Baris dan kolum tidak sama");
            return undefined;
        }

        let matrixPertama = this.matrix;
        let matrixKedua = a.matrix;
        let hasil = new Matrix(this.baris, a.kolom);

        for (let b = 0; b < hasil.baris; b++) {
            for (let k = 0; k < hasil.kolom; k++) {
                let jumlah = 0;
                for (let m = 0; m < a.baris; m++) {
                    //console.log(b+" "+k+" "+m+" \n");

                    jumlah += matrixPertama[b][m] * matrixKedua[m][k];
                    //console.log(tampMatrix[b][m]+"*"+tampMatrix2[m][k]);
                }
                hasil.matrix[b][k] = jumlah;
            }
        }
        return hasil.matrix;
    }

    perkalianSkalar(n) {
        for (let b = 0; b < this.baris; b++) {
            for (let k = 0; k < this.kolom; k++) {
                //console.log(Math.floor(Math.random() * 100));
                this.matrix[b][k] *= n;
            }
        }
        console.table(this.matrix);
    }

    transfos(){
        let hasil = new Matrix(this.kolom, this.baris);
        for (let b = 0; b < this.baris; b++) {
            for (let k = 0; k < this.kolom; k++) {
                hasil.matrix[k][b] = this.matrix[b][k];
            }
        }
        return hasil.matrix;
    }

    penjumlahan(a) {
        let hasil = new Matrix(this.baris, this.kolom);
        for (let b = 0; b < this.baris; b++) {
            for (let k = 0; k < this.kolom; k++) {
                hasil.matrix[b][k] = this.matrix[b][k] + a.matrix[b][k];
            }
        }
        return hasil.matrix;
    }
}