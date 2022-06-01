import React, { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProduct";
import { Cards } from "../cards/Cards";
import './styles.css';

export const Main = () => {
  const { data } = useProducts();
  // const [filter, setFilter] = useState({ prop: '', value: '', data: data })
  // useEffect(() => {
  //   if (!filter.prop && filter.value) {
  //     setFilter(state => ({ ...state, data }))
  //   }
  // }, [data, filter.prop, filter.value])

  return (

    <main className="main">
      <section className="section-card-button">
        <Cards data={data} />
      </section>
    </main>
  )
}