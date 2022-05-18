import { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  message: yup.string().required(),
})

interface IMessageForm {
  message: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMessageForm, object>({
    defaultValues: { message: '' },
    resolver: yupResolver(schema),
    mode: 'all',
  })
  const [disabled, setDisabled] = useState(false)
  const onSubmit = async (form: IMessageForm) => {
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }

    setDisabled(true)
    const res = await fetch('/api/message', requestInit)
    if (res.status === 200) {
      alert('success')
      setDisabled(false)
    } else {
      alert('failed')
      setDisabled(false)
    }
  }

  return (
    <Container className="mt-4" fluid>
      <Card>
        <Card.Header>Contact</Card.Header>
        <Card.Body>
          {/* <Card.Title>About</Card.Title> */}
          <Card.Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                {...register('message')}
                placeholder="message"
                disabled={disabled}
                autoComplete="off"
                rows={3}
              />
              <div className="mb-3 text-danger">
                {errors.message && errors.message.message}
              </div>
              <Button variant="primary" type="submit" disabled={disabled}>
                Submit
              </Button>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Contact
