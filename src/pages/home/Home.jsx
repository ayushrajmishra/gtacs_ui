import { Table, TableCell, TableHead, TableContainer, TableRow, Button } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserStart } from '../../services/actions/action'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'


const Home = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((store) => store.userReducer)


  const handleDelete = (id) => {

  }
  const handleEdit = (user) => {

  }

  useEffect(() => {
    
    dispatch(loadUserStart())

  }, [])
console.log("User insode home",users)
  return (
   
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
            {
            users.data ?   users.data.map((user) => {

                return <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(user.id)}>
                      Delete
                    </Button>
                    <Link to={ `/userinfo/${user.id}`}>
                      <Button
                        variant="outlined"
                        startIcon={<VisibilityIcon />}>
                        View
                      </Button>
                    </Link>

                    <Button
                      variant='outlined'
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(user)}>
                      Edit
                    </Button>

                  </TableCell>
                </TableRow>
              }):"No data found"
            }

          </TableHead>
          {/* <TableFooter>
            <TableRow>
              <TablePagination />
            </TableRow>
          </TableFooter> */}

        </Table>
      </TableContainer>
    </Container>
  )
}

export default Home