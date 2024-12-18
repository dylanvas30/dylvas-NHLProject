import React from "react";
import { Link } from 'next/link';

function league_sched() {
    return (
        <div>
            <h1>League Schedule Page</h1>
            <p>Go to <Link href='/league_sched'>league schedule page</Link></p>
        </div>
    );
}

export default league_sched;