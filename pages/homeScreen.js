import Link from 'next/link';

export default function homeScreen(){
    return(
        <>
            <h1 ><Link href="Exercise1/flexDemo">Flex Page</Link></h1>
            <h1 ><Link href="Exercise1/ResponsiveDemo">Responsive Page</Link></h1>
            <h1> <Link href="LoginScreen/loginScreen">Login Page</Link></h1>
        </>
    )
};