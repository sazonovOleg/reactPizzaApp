import React from "react"
import classNames from "classnames";

export default function Button({onClick, className, outline, children, add, back, pay}) {
    return (
        <button
            onClick = {onClick}
            className={classNames('button', className,
            {
                'button--outline': outline,
                'button--add': add,
                'go-back-btn': back,
                'pay-btn': pay,
            })}>
            {children}
        </button>
    )
}
