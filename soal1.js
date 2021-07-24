var nilai = prompt("Inputkan nilai akhir:");
        var grade = "";
    //harus pake prompt ketika input nilai   

        if(nilai >= 90) grade = "A"
        else if(nilai >= 80) grade = "B+"
        else if(nilai >= 70) grade = "B"
        else grade = "F";

        document.write(`<p>grade: ${grade}</p>`);
        

            
                 