import React from 'react';
import PropTypes from 'prop-types'
import { formatAmount } from '../../js/format-currency'

const Money = ({ amount }) => {
    const formatted = formatAmount(amount)
    return (
        <span>{formatted}</span>
    )
}
Money.propTypes = {
    amount: PropTypes.number.isRequired,
}
export default Money