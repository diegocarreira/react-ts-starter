import './CustomerForm.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Customer } from "../../models/Customer";
import { CustomerValidationSchema } from "../../schemas/schemas";

type customerFormProps = {
  customerBeforeEdit?: Customer;
  handleSubmit: (values:Customer) => void;
}

const CustomerForm = ({customerBeforeEdit, handleSubmit}:customerFormProps) => {

  const initialValues:Customer = customerBeforeEdit || { id: undefined, name: '', email: '', status: true };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit  = (values:Customer, actions:any) => {
    actions.setSubmitting(false);
    values.id = customerBeforeEdit?.id;
    handleSubmit(values);
  }


  return (
      <div className="form-container">
        <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={CustomerValidationSchema}
        onSubmit={onSubmit}
        >
          {({ isSubmitting, isValid }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <ErrorMessage name="name" component="span" />
              <Field data-testid="name" type="text" name="name" maxLength="40" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <ErrorMessage name="email" component="span" />
              <Field data-testid="email" type="email" name="email" maxLength="40" />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <Field data-testid="status" component="select" name="status">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </Field>
              <ErrorMessage name="status" component="span" />
            </div>

            <div className="form-group">
              <button type="submit" data-testid="submit" name="submit" disabled={isSubmitting || !isValid}>
                Save
              </button>
            </div>

          </Form>
        )}
        </Formik>
      </div>
  );
};
export default CustomerForm;
