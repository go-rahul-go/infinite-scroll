import { useState, useRef, useEffect } from "react";
import Card from "./components/Card"
import MouseAni from "./components/MouseAni";
import GoTop from "./components/GoTop"

function App() {

  const [prod, updateProds] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [shownAllProducts,updateProductsShown]=useState(false)
  const moreRef = useRef();

  const addMoreProd = () => {
    let lastItem = prod[prod.length - 1];
    let temp = lastItem + 1;
    let tempArr = []

    let timer = setTimeout(() => {
      if (prod.length <=328) {
        for (let i = temp; i <= (lastItem + 8); i++) {
          tempArr.push(i);
        }
        updateProds([...prod, ...tempArr])
        tempArr = []
      }
      else{
        updateProductsShown(true)
      }
      

    }, [1000])




  }
  useEffect(() => {
    let moreVar=moreRef.current;
    let observer = new IntersectionObserver((entries) => {
      let e1 = entries[0];
      // e1.isIntersecting?prod.length===1000?addMoreProd():console.log("no");
      if (e1.isIntersecting) 
      {
        addMoreProd()
      }
     
      
    })
    observer.observe(moreRef.current)
    document.title=`${prod.length} products`
    
    return ()=>{
      observer.unobserve(moreVar)
    }
  })

  useEffect(()=>{
    window.scrollTo(0,0)
    document.title="infinite scroll"
  },[])
  return (
    <>
      <h1 className="text-oldLace text-5xl font-semibold text-center w-[95%] border-b-[0.5px] mx-auto py-2 border-gray-700" id="title">infinite scroll</h1>


      <div className="w-[95%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-[100px] gap-5 mx-auto place-items-center overflow-hidden">
        {
          prod.map((item, index) => {
            return (
              <Card key={index} item={item} />
            )
          })
        }
      </div>
      <div ref={moreRef} className="w-full h-[100px] grid place-items-center observer capitalize font-semibold">
        {
          shownAllProducts?<p className="text-blue-600 text-2xl lg:text-3xl">that's all we have</p>:
          <p className="text-blue-700 text-2xl lg:text-3xl ">loading please wait...</p>
        }
       
      </div>
      <MouseAni bottom={shownAllProducts}/>
      <GoTop/>
    </>
  )
}

export default App
