import {CustomMDX} from "@/app/MdxCustomComponent/CusnomMDXrRemote";


export default function MdxComponent() {

    return(
        <div>
            <CustomMDX source={`# Hello world This is from server component
            `}/>
        </div>
    )
}