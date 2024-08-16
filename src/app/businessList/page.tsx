import {CardBusiness} from "@/components/customComponents/CardBusiness";
import dataNegocios from '../../../public/dummy/NegociosDummy.json'

export default function Page() {
    const businessInfo = dataNegocios;

    return (
        <>
            <h2 className="text-3xl">Negocios</h2>
        <section className="p-4">
            <section className="grid grid-cols-6 gap-y-3 sm:grid-cols-3">
            { businessInfo.map( (item) => (
                <CardBusiness
                    {...item}
                />
            ))}
            </section>
        </section>
        </>
    )
}