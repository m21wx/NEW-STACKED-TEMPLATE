

		let menuP = document.querySelector('.link p');
		let menuUl = document.querySelector('.link ul');
		menuP.onclick =()=>{
			menuP.classList.toggle('menu');
			if(menuP.classList.contains('menu')){
			
				menuUl.style.display='none';
				menuP.innerHTML ='<i class="fa-solid fa-xmark"></i>';
			}else{
		
				menuUl.style.display='block';
				menuP.innerHTML ='<i class="fa-solid fa-bars"></i>';
			}
		}

			let boxSlider = Array.from(document.querySelectorAll('.recent-slider'));
			let spanSlider = Array.from(document.querySelectorAll('.indexSlider span'));
		
			
			
				function removeClass(){
					boxSlider.forEach(e=>{
						e.classList.remove('active');
					})
					spanSlider.forEach(e=>{
						e.classList.remove('spanGreen');
					})
				
				}
	
			
			
			boxSlider.forEach(s =>{
				removeClass()
				boxSlider[0].classList.add('active');
				spanSlider.forEach((e , i)=>{
					spanSlider[0].classList.add('spanGreen');
				e.onclick =()=>{
					removeClass()
					boxSlider[i].classList.add('active');
					spanSlider[i].classList.add('spanGreen');
				}
			
			})
			
			
	
			})
			
	
	