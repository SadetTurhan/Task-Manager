function TasksTable(){
    return(
        <table className="table-auto">
            <thead>
                <tr>
                <th>Task Name</th>
                <th>Date of Assignment</th>
                <th>Deadline</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Washing Dishes</td>
                    <td>22-08-23</td>
                    <td>22-08-23</td>
                    <td>Working on</td>
                </tr>
                <tr>
                    <td>Cooking</td>
                    <td>22-08-23</td>
                    <td>22-08-23</td>
                    <td>Not started</td>
                </tr>
                <tr>
                    <td>Taking the dog to a walk</td>
                    <td>22-08-23</td>
                    <td>22-08-23</td>
                    <td>Finished</td>
                </tr>
            </tbody>
        </table>
    )
}
export { TasksTable };