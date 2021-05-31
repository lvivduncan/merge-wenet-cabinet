
// sorting tv channels
{
  const 
    tvHead = document.querySelector('#tv-head'),
    tvContent = document.querySelector('#tv-content'),
    
    head1 = document.querySelector('#tv-head-0'),
    head2 = document.querySelector('#tv-head-1'),
    head3 = document.querySelector('#tv-head-2'),
    head4 = document.querySelector('#tv-head-3');

    fetch('https://dev.wenet.lviv.ua/tv_channels.json')
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(result => {

            const rate1 = result['channel_packet']['t4502'];
            const rate2 = result['channel_packet']['t4505'];
            const rate3 = result['channel_packet']['t4508'];
            const rate4 = result['channel_packet']['t4511'];

            // channels
            const channels = result.channels;
        
        /* якщо ширина екрана менша за десктоп 1200 */
        if (window.innerWidth < 1200){

            for (let [ i, item ] of Object.entries(channels)) {
                head1.innerHTML += `${rate1[i] == true ? `<img src="${channels[i].logo}" alt="">` : ''}`;
                head2.innerHTML += `${rate2[i] == true ? `<img src="${channels[i].logo}" alt="">` : ''}`;
                head3.innerHTML += `${rate3[i] == true ? `<img src="${channels[i].logo}" alt="">` : ''}`;
                head4.innerHTML += `${rate4[i] == true ? `<img src="${channels[i].logo}" alt="">` : ''}`;
            }

        } else {
            
            for (let [ i, item ] of Object.entries(channels)) {
                tvContent.innerHTML += `
                    <article>
                        <header>
                            <img src="${item.logo}" alt=""> 
                            <h3>${item.name == 'HDFASHION&LIFESTYLE' ? 'HDFASHION & LIFESTYLE' : item.name}</h3>
                        </header>
                        <div><i class="${rate1[i]}"></i></div>
                        <div><i class="${rate2[i]}"></i></div>
                        <div><i class="${rate3[i]}"></i></div>
                        <div><i class="${rate4[i]}"></i></div>
                    </article>`;
            }

        }
        
        })
        .catch(error => console.error(error));

    head1.addEventListener('click', _ => head1.classList.toggle('hide'));
    head2.addEventListener('click', _ => head2.classList.toggle('hide'));
    head3.addEventListener('click', _ => head3.classList.toggle('hide'));
    head4.addEventListener('click', _ => head4.classList.toggle('hide'));

    // fixed header
    window.addEventListener('scroll', stickyFunc);

    const sticky = tvHead.offsetTop;

    function stickyFunc() {
        // window.pageYOffset >= sticky && window.innerWidth > 1180 ? tvHead.classList.add("sticky") : tvHead.classList.remove("sticky");
        window.pageYOffset >= 70 ? tvHead.classList.add("sticky") : tvHead.classList.remove("sticky");
    }

}