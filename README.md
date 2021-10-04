# Online-zoo
____
![online-zoo-photo](https://user-images.githubusercontent.com/70884097/135812201-3d8ab5f0-9498-43ea-9414-c8a55b4a8bb5.png)

My project for **The Rolling Scopes School**. The project was done and created by me.
I used adaptive design also for 1200px, 640px, 320px.
Here i used HTML, CSS, JavaScript. 

I wrote code for slider. 
```
    buttonPetsInZoo.forEach((el, index) => el.addEventListener('click', () => {
      const width = sliderInZoo.offsetWidth;
      if (index === 0){
        sliderInZoo.scrollBy(-(width) , 0);
      if (0 >= sliderInZoo.scrollLeft -  width)  buttonPetsInZoo[0].style.visibility = 'hidden';
        buttonPetsInZoo[1].style.visibility = 'inherit';
      } else {
        sliderInZoo.scrollBy(width, 0);
      if (sliderTrack.scrollWidth - width <= sliderInZoo.scrollLeft +  width) buttonPetsInZoo[1].style.visibility = 'hidden';
      buttonPetsInZoo[0].style.visibility = 'inherit'
      }
    })
  )
```
