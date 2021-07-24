import React, { useEffect, useState } from 'react'
import * as B from 'reactstrap'
import { Container } from './styles'
import { useGlobals } from '../../context/globals'

import Line from './Line'

const Lecupon = () => {
    const { categories, setCategories } = useGlobals()

    return (
        <Container>
            { categories.map((category, i) => (
                <Line
                    id={category.id}
                    name={category.name}
                    discount={category.discount}
                    min={category.min}
                    max={category.max}
                    amount={category.amount}
                />
            )) }
        </Container>
    )
}

export default Lecupon;