export default function ResponsiveDemo(){
    return(
        <>
            <div class="w-full bg-green whitespace-nowrap">
                <h1 class="w-full sm:text-center bg-gray text-left ">Header</h1>
                <h1 class="sm:text-left text-center">Header 1</h1>
                <div>
                    <div class="w-300 h-200 bg-blue textwrap rounded">
                        <img scr="../../public/vercel" class="w-200 h-200"></img>
                        <p class="w-50 text-center">This is to check the responsive off the screen. and the text which flows throught the screen.</p>
                    </div>
                    <br></br>
                    <button class="btn-blue"> check</button>
                    <br></br>
                    <br></br>
                    <button class="submit-btn">submit</button><br></br>
                    <br></br>
                    <button class="cancel-btn">cancel</button>
                    <br></br>
                    <br></br>
                    <button class="success-btn">Accept test ride</button> &nbsp; <button class="success-btn btn-disabled" disabled="true">Accept test ride</button> 
                    <br></br>
                    <br></br>
                    <button class="danger-btn">reject test ride</button> &nbsp; <button class="danger-btn btn-disabled" disabled="true">Reject test ride</button> 
                    <br></br>
                    <br></br>
                    <button class="details-btn">View details</button>  &nbsp; <button class="details-btn btn-disabled" disabled="true">View Details</button> 
                    <br></br>
                    <br></br>
                </div>
            </div>

        </>
    )
}