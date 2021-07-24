import React, { useEffect, useState } from 'react'
import mockCategories from '../../mock'
import * as B from 'reactstrap'
import { Container } from './styles'

import Line from './Line'

const Lecupon = () => {
    const [categories, setCategories] = useState(mockCategories)

    useEffect(() => {
        console.log(categories)
    }, [categories])

    return (
        <Container>
            { categories.map((category, i) => (
                <Line
                    name={category.name}
                    discount={category.discount}
                    min={category.min}
                    max={category.max}
                    defaultValue={category.default}
                />
            )) }
        </Container>
    )
}

export default Lecupon;