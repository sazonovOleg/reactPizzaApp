import React from "react"
import classNames from "classnames";
//30min

export default function Button(props) {
    return (
        <button className={classNames('button', props.className,
            {
                'button--cart': props.cartStyle,
            })}>
            {props.children}
        </button>
    )
}
