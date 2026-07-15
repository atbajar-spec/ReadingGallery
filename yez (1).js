function openPopup() { document.getElementById("popup").style.display = "block"; }
function closePopup() { document.getElementById("popup").style.display = "none"; }

function openPopup2() { document.getElementById("popup2").style.display = "block"; }
function closePopup2() { document.getElementById("popup2").style.display = "none"; }

function openPopup3() { document.getElementById("popup3").style.display = "block"; }
function closePopup3() { document.getElementById("popup3").style.display = "none"; }

function openPopup4() { document.getElementById("popup4").style.display = "block"; }
function closePopup4() { document.getElementById("popup4").style.display = "none"; }

function openPopup5() { document.getElementById("popup5").style.display = "block"; }
function closePopup5() { document.getElementById("popup5").style.display = "none"; }

function openPopup6() { document.getElementById("popup6").style.display = "block"; }
function closePopup6() { document.getElementById("popup6").style.display = "none"; }

function openPopup7() { document.getElementById("popup7").style.display = "block"; }
function closePopup7() { document.getElementById("popup7").style.display = "none"; }

function openPopup8() { document.getElementById("popup8").style.display = "block"; }
function closePopup8() { document.getElementById("popup8").style.display = "none"; }

function openPopup9() { document.getElementById("popup9").style.display = "block"; }
function closePopup9() { document.getElementById("popup9").style.display = "none"; }

function openPopup10() { document.getElementById("popup10").style.display = "block"; }
function closePopup10() { document.getElementById("popup10").style.display = "none"; }

function openPopup11() { document.getElementById("popup11").style.display = "block"; }
function closePopup11() { document.getElementById("popup11").style.display = "none"; }

function openPopup12() { document.getElementById("popup12").style.display = "block"; }
function closePopup12() { document.getElementById("popup12").style.display = "none"; }

function openPopup13() { document.getElementById("popup13").style.display = "block"; }
function closePopup13() { document.getElementById("popup13").style.display = "none"; }

function openPopup14() { document.getElementById("popup14").style.display = "block"; }
function closePopup14() { document.getElementById("popup14").style.display = "none"; }

function openPopup15() { document.getElementById("popup15").style.display = "block"; }
function closePopup15() { document.getElementById("popup15").style.display = "none"; }

function openPopup16() { document.getElementById("popup16").style.display = "block"; }
function closePopup16() { document.getElementById("popup16").style.display = "none"; }

function openPopup17() { document.getElementById("popup17").style.display = "block"; }
function closePopup17() { document.getElementById("popup17").style.display = "none"; }

function openPopup18() { document.getElementById("popup18").style.display = "block"; }
function closePopup18() { document.getElementById("popup18").style.display = "none"; }

function openPopup19() { document.getElementById("popup19").style.display = "block"; }
function closePopup19() { document.getElementById("popup19").style.display = "none"; }

function openPopup20() { document.getElementById("popup20").style.display = "block"; }
function closePopup20() { document.getElementById("popup20").style.display = "none"; }

window.onclick = function(event) {
    for (let i = 1; i <= 20; i++) {
        let popup = document.getElementById(i === 1 ? "popup" : "popup" + i);
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
};


