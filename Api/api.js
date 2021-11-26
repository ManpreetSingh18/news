
$(document).ready(function () {
    // Main page or main panel
    //Left Side
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
        
        success: function (data) {
            let j = 4, date = 0, newdate = 0;

            for (let i = 0; i < j; i++) {
                if (data.articles[i].urlToImage == null) {
                    console.log("Null Image Occur");
                    j++;
                    continue;
                }


                date = new Date(data.articles[i].publishedAt);
                newdate = date.toLocaleTimeString();
                console.log(newdate);


                $('#main-panel').append(`
            <div class = "hot-topic">
                <img src="${data.articles[i].urlToImage}" alt = "">

                <div class="hot-topic-content ">
                    <h2 class="text-light" >${data.articles[i].title}</h2>

                    <h3> ~${newdate}   </h3>
                     
                    <a  href = "${data.articles[i].url}">Read More</a>
                </div>
            </div>
             `)
            }
        },
        error: function () {
            alert("Some Error Occured");
        }
    }),

        //main-left-panel Covid
        $.ajax({
            url: " https://newsapi.org/v2/everything?qInTitle=covid&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                for (let i = 0; i < 5; i++) {

                    $('#main-left-panel').append(`
            <a  style="color:white" target="_blank" href="${data.articles[i].url}"><h3>${data.articles[i].title}<span style="color:rgba(255,163,26,1)">by ${data.articles[i].source.name}</span></h3></a>
             `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),
        //Main Panel Ends


        //First Page Start

        //Left Section of Sports Start
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let i = 0, j = 1;
                while (i < j) {
                    if (data.articles[i].urlToImage != null) {
                        $('#main-headline-img1').attr("src", data.articles[i].urlToImage);
                        $('#main-headline-title1').text(data.articles[i].title);
                        $('#main-headline-source1').text(data.articles[i].source.name);
                        $('#main-headline-description1').text(data.articles[i].description);
                        $('#main-headline-url1').attr("href", data.articles[i].url);
                        i++;
                    }
                    i++;
                    j++;
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),

        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 5;
                for (let i = 3; i < j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#home-left2').append(`
                <article>
                    <img  src="${data.articles[i].urlToImage}">
                    <div>
                        <h3>${data.articles[i].title}</h3>
                        <p>${data.articles[i].description} </p>

                        <a href="${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                </article>

                `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),



        //<!-- Right Section of Sports page  -->
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 11
                for (let i = 6; i < j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#techy').append(`
                    <article>
                    <h4>${data.articles[i].source.name}</h4>
                    <div>
                        <h2>${data.articles[i].title}</h2>

                        <p>${data.articles[i].description}</p>

                        <a href = "${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                   
                    <img src="${data.articles[i].urlToImage}">
                </article>
                    `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),
        //First Page Ends

        


        //Third Page Starts

        //Left Section of health STarts
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let i = 0, j = 1;
                while (i < j) {
                    if (data.articles[i].urlToImage != null) {
                        $('#main-headline-img2').attr("src", data.articles[i].urlToImage);
                        $('#main-headline-title2').text(data.articles[i].title);
                        $('#main-headline-source2').text(data.articles[i].source.name);
                        $('#main-headline-description2').text(data.articles[i].description);
                        $('#main-headline-url2').attr("href", data.articles[i].url);
                        i++;
                    }
                    i++;
                    j++;
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),

        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 5;
                for (let i = 3; i < j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#home-left2_3').append(`
                <article>
                    <img  src="${data.articles[i].urlToImage}">
                    <div>
                        <h3>${data.articles[i].title}</h3>
                        <p>${data.articles[i].description} </p>

                        <a href="${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                </article>

                `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),



        //<!-- Right Section Health Starts -->
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 11;
                for (let i = 7; i <= j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#techy_3').append(`
                    <article>
                    <h4>${data.articles[i].source.name}</h4>
                    <div>
                        <h2>${data.articles[i].title}</h2>

                        <p>${data.articles[i].description}</p>

                        <a href = "${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                   
                    <img src="${data.articles[i].urlToImage}">
                </article>
                    `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        })
    //Third Page Ends





    
    //Fourth or Technology Page Starts

        //Left Section of Technology STarts
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let i = 0, j = 1;
                while (i < j) {
                    if (data.articles[i].urlToImage != null) {
                        $('#main-headline-img4').attr("src", data.articles[i].urlToImage);
                        $('#main-headline-title4').text(data.articles[i].title);
                        $('#main-headline-source4').text(data.articles[i].source.name);
                        $('#main-headline-description4').text(data.articles[i].description);
                        $('#main-headline-url4').attr("href", data.articles[i].url);
                        i++;
                    }
                    i++;
                    j++;
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),

        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 5;
                for (let i = 3; i < j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#techleft').append(`
                <article>
                    <img  src="${data.articles[i].urlToImage}">
                    <div>
                        <h3>${data.articles[i].title}</h3>
                        <p>${data.articles[i].description} </p>

                        <a href="${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                </article>

                `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),



        //<!-- Right Section of Technology Starts -->
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 11;
                for (let i = 7; i <= j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#techright').append(`
                    <article>
                    <h4>${data.articles[i].source.name}</h4>
                    <div>
                        <h2>${data.articles[i].title}</h2>

                        <p>${data.articles[i].description}</p>

                        <a href = "${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                   
                    <img src="${data.articles[i].urlToImage}">
                </article>
                    `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        })
    //FOurth or Technology Page Ends





    
    //Fifth or Entertainment Page Starts

        //Left Section of Entertainment STarts
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let i = 0, j = 1;
                while (i < j) {
                    if (data.articles[i].urlToImage != null) {
                        $('#main-headline-img5').attr("src", data.articles[i].urlToImage);
                        $('#main-headline-title5').text(data.articles[i].title);
                        $('#main-headline-source5').text(data.articles[i].source.name);
                        $('#main-headline-description5').text(data.articles[i].description);
                        $('#main-headline-url5').attr("href", data.articles[i].url);
                        i++;
                    }
                    i++;
                    j++;
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),

        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 5;
                for (let i = 3; i < j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#enterleft').append(`
                <article>
                    <img  src="${data.articles[i].urlToImage}">
                    <div>
                        <h3>${data.articles[i].title}</h3>
                        <p>${data.articles[i].description} </p>

                        <a href="${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                </article>

                `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),



        //<!-- Right Section of Entertainment Starts -->
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 11;
                for (let i = 7; i <= j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#enterright').append(`
                    <article>
                    <h4>${data.articles[i].source.name}</h4>
                    <div>
                        <h2>${data.articles[i].title}</h2>

                        <p>${data.articles[i].description}</p>

                        <a href = "${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                   
                    <img src="${data.articles[i].urlToImage}">
                </article>
                    `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        })
    //Fifth  or Entertainment Page Ends


    //ccccccccc
    //Fifth or Buisness Page Starts

        //Left Section of Buisness STarts
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let i = 0, j = 1;
                while (i < j) {
                    if (data.articles[i].urlToImage != null) {
                        $('#main-headline-img6').attr("src", data.articles[i].urlToImage);
                        $('#main-headline-title6').text(data.articles[i].title);
                        $('#main-headline-source6').text(data.articles[i].source.name);
                        $('#main-headline-description6').text(data.articles[i].description);
                        $('#main-headline-url6').attr("href", data.articles[i].url);
                        i++;
                    }
                    i++;
                    j++;
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),

        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
            success: function (data) {
                let j = 5;
                for (let i = 3; i < j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#usaleft').append(`
                <article>
                    <img  src="${data.articles[i].urlToImage}">
                    <div>
                        <h3>${data.articles[i].title}</h3>
                        <p>${data.articles[i].description} </p>

                        <a href="${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                </article>

                `)
                }
            },
             error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
        }),



        //<!-- Right Section of Buisness Starts -->
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7c6ecc73ea8f45be8c3bd665ddd0d7fd",
           
            success: function (data) {
                let j = 11;
                for (let i = 7; i <= j; i++) {

                    if (data.articles[i].urlToImage == null) {
                        console.log("Null Image Occur");
                        j++;
                        continue;
                    }


                    $('#usaright').append(`
                    <article>
                    <h4>${data.articles[i].source.name}</h4>
                    <div>
                        <h2>${data.articles[i].title}</h2>

                        <p>${data.articles[i].description}</p>

                        <a href = "${data.articles[i].url}">Read More <span>>></span></a>
                    </div>
                   
                    <img src="${data.articles[i].urlToImage}">
                </article>
                    `)
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
            }
            
        })
    //Sixth  or Buisness Page Ends




});
