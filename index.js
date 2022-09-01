        window.onload = function() {
            outter.innerHTML = text;
            box.style.backgroundColor = "transparent";
            box.style.border = "2px solid black";
            del.value = "";
        }
        
        const box = document.getElementById('main');
        const outter = document.getElementById('out');
        const clear = document.getElementById('clear');
        const del = document.getElementById('delete');
        const text = "RGB(x,y,z)";

        clear.addEventListener('click', function onClick(event) {
            outter.innerHTML = text;
            box.style.backgroundColor = "transparent";
            box.style.borderColor = "black";
            del.value = "";
        });

        //************************************************************************************/
        //
        // @param X {string} the RGB version of color, which will be converted into HEX
        // @param RGB(167,39,54)
        //
        //************************************************************************************/
        
        function parseRGB(x) {
            let arr = x.split(',');
            let first = Number(arr[0].split('(')[1]);
            let sec = Number(arr[1]);
            let third = Number(arr[2].split(')')[0]);
            let toParse = [];
            toParse.push(first,sec,third);
            let hex = '#';
            for (let i = 0; i < toParse.length; i += 1) {
                if (Number(toParse[i].toString(16)) < 10) {
                    hex += '0' + (toParse[i]).toString(16);
                } else {
                    hex += (toParse[i]).toString(16);
                }
            }
            outter.innerHTML = hex;
            box.style.backgroundColor = hex;
            box.style.borderColor = hex;
        };
