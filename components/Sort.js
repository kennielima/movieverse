"use client"
import Link from "next/link"
import { Fragment, useState } from "react"

export default function Sort() {
    const [sortToggle, setSortToggle] = useState(false)
    const sortHandler = () => {
        setSortToggle(!sortToggle)
    }

    return (
        <Fragment>
            <div
                onClick={sortHandler}
                className="text-lg cursor-pointer ">
                Sort
            </div>
            {sortToggle &&
                <div className="text-sm cursor-pointer transition-all ease-in-out">
                    <Link href='/byrelease'>
                        <p>by release date</p>
                    </Link>
                    <Link href='/byratings'>
                        <p>by ratings</p>
                    </Link>
                </div>}
        </Fragment>
    )
}