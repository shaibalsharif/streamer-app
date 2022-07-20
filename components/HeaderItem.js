import {useRouter} from 'next/router'
const HeaderItem = ({ title, Icon }) => {
    let router= useRouter();
   
    const handleClick = e => {
       
         for(let i=0;i<e.target.classList.length;i++){
             if(e.target.classList[i]=='HOME'){
                
                router.push("/")
      
                    break;
             }
             if(e.target.classList[i]=='SEARCH'){
            
                break;
         }
        }

       
    }

    return (
        <div className={`${title} flex flex-col items-center cursor-pointer group  w-12 sm:w-20 hover:text-white`}
            onClick={handleClick}>
            <Icon
                className={`${title} h-8 mb-1 group-hover:animate-bounce`}
            />
            <p className={`${title} opacity-0 group-hover:opacity-100 tracking-widest`}>
                {title}
            </p>
        </div>
    )
}

export default HeaderItem