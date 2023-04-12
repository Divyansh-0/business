import React from "react";
import Head from "../../components/Head";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import "./Plans.css";

const Plans = () => {
  return (
    <>
      <Head title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
        exercitationem error ad debitis quod.
      </Head>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features, icon, premium }) => {
            return (
              <Card key={id} className="plan">
                <span className={premium ? "premium" : ""}>{icon}</span>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`₹${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg"> Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
