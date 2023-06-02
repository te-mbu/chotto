import React from "react";
import { useFormik, Field, Form, Formik } from "formik";

function ReservationsPage() {
    const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
  const formik = useFormik({
    initialValues: {
      prenom: "",
      nomdefamille: "",
      email: "",
      numero: "",
      remarques: "",
      date: formattedDate,
      nbPersonnes: "1",
      heure: "12",
    },
    onSubmit: (values, { resetForm }) => {
      if (
        values.prenom &&
        values.nomdefamille &&
        values.email &&
        values.remarques &&
        values.date &&
        values.nbPersonnes &&
        values.heure
      ) {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      } else {
        alert(
          "Veuillez remplir tous les champs avant de soumettre le formulaire."
        );
      }
    },
  });

  return (
    <div className="mt-24 w-11/12 flex flex-col items-center m-auto">
      <h1 className="text-2xl p-14">+ 555 1234 5678</h1>
      <p className="leading-relaxed">
        Veuillez réserver au moins deux semaines à l’avance à l’aide du
        formulaire ci-dessous. En cas de réservation pour la semaine suivante ou
        de groupe de plus de quatre personnes, veuillez nous appeler au numéro
        indiqué ci-dessus. Nous vous appellerons pour confirmer votre
        réservation au moins 24 heures à l’avance.
      </p>
      <Formik>
        <Form
          className="flex flex-col items-center gap-5 my-14"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="w-full">
            Nom <span className="text-slate-500">(obligatoire)</span>
          </h2>
          <div className="flex flex-row gap-4">
            <div id="prenom">
              <h2>Prénom</h2>
              <div className="w-full rounded-lg overflow-hidden max-w-5xl">
                <Field
                  id="prenom"
                  name="prenom"
                  type="text"
                  className="w-full border-[1px] border-black bg-[#FAFAFA] pl-2 py-2 focus:outline-2"
                  onChange={formik.handleChange}
                  value={formik.values.prenom}
                />
              </div>
            </div>
            <div id="nomdefamille">
              <h2>Nom de famille</h2>
              <div className="w-full rounded-lg overflow-hidden max-w-5xl">
                <Field
                  id="nomdefamille"
                  name="nomdefamille"
                  type="text"
                  className="w-full border-[1px] border-black bg-[#FAFAFA] pl-2 py-2 focus:outline-2"
                  onChange={formik.handleChange}
                  value={formik.values.nomdefamille}
                />
              </div>
            </div>
          </div>
          <div id="email" className="w-full">
            <h2>
              E-mail <span className="text-slate-500">(obligatoire)</span>
            </h2>
            <div className="w-full rounded-lg overflow-hidden max-w-5xl">
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full border-[1px] border-black bg-[#FAFAFA] pl-2 py-2 focus:outline-2"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <div id="numero" className="w-full">
            <h2>Numéro</h2>
            <p className="text-slate-500 py-1">
              Nous vous appellerons pour confirmer votre réservation au moins 24
              heures avant.
            </p>
            <div className="w-full rounded-lg overflow-hidden max-w-5xl">
              <Field
                id="numero"
                name="numero"
                type="number"
                className="w-full border-[1px] border-black bg-[#FAFAFA] pl-2 py-2 focus:outline-2"
                onChange={formik.handleChange}
                value={formik.values.numero}
              />
            </div>
          </div>
          <div id="remarques" className="w-full">
            <h2>
              Remarques <span className="text-slate-500">(obligatoire)</span>
            </h2>
            <div className="w-full rounded-lg overflow-hidden max-w-5xl">
              <textarea
                id="remarques"
                name="remarques"
                type="textarea"
                className="w-full border-[1px] border-black bg-[#FAFAFA] pl-2 py-2 focus:outline-2"
                onChange={formik.handleChange}
                value={formik.values.remarques}
              ></textarea>
            </div>
          </div>
          <div id="date" className="w-full">
            <h2>
              Date <span className="text-slate-500">(obligatoire)</span>
            </h2>
            <div className="w-full rounded-lg overflow-hidden max-w-5xl">
              <Field
                id="date"
                name="date"
                type="date"
                className="w-full border-[1px] border-black bg-[#FAFAFA] pl-2 py-2 focus:outline-2"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
            </div>
          </div>
          <div id="nbPersonnes" className="w-full">
            <h2>
              Nombre de personnes <span className="text-slate-500">(obligatoire)</span>
            </h2>
            <div className="w-full rounded-lg overflow-hidden max-w-5xl">
              <Field
                id="nbPersonnes"
                name="nbPersonnes"
                as="select"
                className="w-full border-[1px] border-black bg-[#FAFAFA] px-2 py-2 focus:outline-2"
                onChange={formik.handleChange}
                value={formik.values.nbPersonnes}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Field>
            </div>
          </div>
          <div id="heure" className="w-full">
            <h2>
              Heure <span className="text-slate-500">(obligatoire)</span>
            </h2>
            <div className="w-full rounded-lg overflow-hidden max-w-5xl">
              <Field
                id="heure"
                name="heure"
                as="select"
                className="w-full border-[1px] border-black bg-[#FAFAFA] px-2 py-2 focus:outline-2"
                onChange={formik.handleChange}
                value={formik.values.heure}
              >
                <option value="12">12h</option>
                <option value="13">13h</option>
                <option value="14">14h</option>
                <option value="15">15h</option>
                <option value="16">16h</option>
                <option value="17">17h</option>
                <option value="18">18h</option>
                <option value="19">19h</option>
                <option value="20">20h</option>
                <option value="21">21h</option>
                <option value="22">22h</option>
                <option value="23">23h</option>
              </Field>
            </div>
          </div>
          <button
            className="border-2 px-8 py-5 mb-4 text-white rounded-lg bg-black"
            type="submit"
          >
            Confirmer
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ReservationsPage;
