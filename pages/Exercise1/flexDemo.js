//import {} from 'react'
import Image from 'next/image'

export default function flexDemo(){
    return(
        <>
            <div style={{backgroundColor: "white" }}>
                <h1>Flex Page</h1>
                <div style={flexStyle.outerContainer,{ display: "flex"}}>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                </div>
                <div style={{ display: "flex",justifyContent:"flex-start"}}>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                </div>
                <div style={{ display: "flex",justifyContent:"center"}}>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                </div>
                <div style={{ display: "flex",justifyContent:"space-between"}}>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                </div>
                <div style={{ display: "flex",justifyContent:"space-around"}}>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                </div>
                <div style={{ display: "flex",justifyContent:"space-evenly"}}>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                    <div style={flexStyle.box}></div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div style={flexStyle.boxGreen}></div>
                    <div style={flexStyle.boxGreen}></div>
                    <div style={flexStyle.boxGreen}></div>
                    <div style={flexStyle.boxGreen}></div>
                    <div style={flexStyle.boxGreen}></div>
                    <div class="w-100 bg-green hover:bg-greenMaster-500"></div>
                    <div class="w-100 bg-green hover:bg-greenMaster-500"></div>
                </div>
                <button class="bg-blue hover:bg-greenMaster-500 hover:outline">
                     Hover It
                </button>

                <div class="w-200 h-200 bg-gray">
                    <h1>heading</h1>
                </div>
                <Image scr="https://i.picsum.photos/id/531/200/300.jpg?hmac=zfPpbPSZ6_bXrCHp-HkvsObzLfkIb7pvmBoZhXrjKo4"  
                    alt="13"
                    width={100}
                    height={100}
                />
                <p>Line</p>
                <img style={{width:200, height:200}} scr="https://i.picsum.photos/id/531/200/300.jpg?hmac=zfPpbPSZ6_bXrCHp-HkvsObzLfkIb7pvmBoZhXrjKo4" alt="image" />

                

                
            </div>
        </>
    )
}

const flexStyle = {
    box:{
        backgroundColor: "skyblue",
        height: "50px",
        width: "200px",
        borderRadius :"10px",
    },
    boxGreen:{
        backgroundColor: "green",
        height: "50px",
        width: "200px",
        borderRadius :"10px",
    },
    outerContainer:{
        height:"60px"
    }
}
// export default function flexDemo(){
//     return <h1>Flex Page new</h1>
        
// }