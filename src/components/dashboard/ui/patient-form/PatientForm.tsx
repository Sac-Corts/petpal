import { Title } from "@/components";

export const PatientForm = () => {

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <Title
                title="Registro de mascotas"
                subtitle="Agrega a tus mascotas"
            />

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Mascota
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre de la mascota"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="age" className="text-sm uppercase font-bold">
                        Edad
                    </label>
                    <input
                        id="age"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Edad de la mascota"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha de registro
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="image" className="text-sm uppercase font-bold">
                        Imagen de la mascota
                    </label>
                    <input
                        id="image"
                        className="w-full p-3  border border-gray-100"
                        type="file"
                        accept="image/*"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="description" className="text-sm uppercase font-bold">
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        className="w-full p-3 border border-gray-100"
                        placeholder="Descripción de la mascota"
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar mascota'
                />
            </form>
        </div>
    )
}
