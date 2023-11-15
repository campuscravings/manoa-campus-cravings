import React from 'react';
import { AutoForm, TextField, LongTextField, SelectField, SubmitField } from 'uniforms-bootstrap5';
import { Container, Col, Card, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { useTracker } from 'meteor/react-meteor-data';
import { Profiles } from '../../api/profiles/Profiles';
import LoadingSpinner from '../components/LoadingSpinner';
import { pageStyle } from './pageStyles';
import { ComponentIDs, PageIDs } from '../utilities/ids';
import { Foods } from '../../api/foods/Foods';
import { updateProfileMethod } from '../../startup/both/Methods';

/* Create a schema to specify the structure of the data to appear in the form. */

const makeSchema = (allFoods) => new SimpleSchema({
  email: { type: String, label: 'Email', optional: true },
  firstName: { type: String, label: 'First', optional: true },
  lastName: { type: String, label: 'Last', optional: true },
  bio: { type: String, label: 'Biographical statement', optional: true },
  picture: { type: String, label: 'Picture URL', optional: true },
  foods: { type: Array, label: 'Favorite Foods', optional: true },
  'foods.$': { type: String, allowedValues: allFoods },
});

/* Renders the Home Page: what appears after the user logs in. */
const UserProfile = () => {
  const submit = (data) => {
    Meteor.call(updateProfileMethod, data, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Profile updated successfully', 'success');
      }
    });
  };

  const { ready, email } = useTracker(() => {
    const sub1 = Meteor.subscribe(Profiles.userPublicationName);
    const sub2 = Meteor.subscribe(Foods.userPublicationName);
    return {
      ready: sub1.ready() && sub2.ready(),
      email: Meteor.user()?.username,
    };
  }, []);
  // Create the form schema for uniforms. Need to determine all resturaunt foods for muliselect list.
  const allFoods = _.pluck(Foods.collection.find().fetch(), 'name'); // Use 'name' instead of 'foods'
  const formSchema = makeSchema(allFoods);
  const bridge = new SimpleSchema2Bridge(formSchema);
  const foods = _.pluck(Foods.collection.find().fetch(), 'name');
  const profile = Profiles.collection.findOne({ email });
  const model = _.extend({}, profile, { foods });
  return ready ? (
    <Container id={PageIDs.homePage} className="justify-content-center" style={pageStyle}>
      <Col>
        <Col className="justify-content-center text-center"><h2>Your Profile</h2></Col>
        <AutoForm model={model} schema={bridge} onSubmit={data => submit(data)}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={6}><TextField id={ComponentIDs.homeFormFirstName} name="firstName" showInlineError placeholder="First Name" /></Col>
                <Col xs={6}><TextField id={ComponentIDs.homeFormLastName} name="lastName" showInlineError placeholder="Last Name" /></Col>
              </Row>
              <LongTextField id={ComponentIDs.homeFormBio} name="bio" placeholder="Write a little bit about yourself." />
              <Row>
                <Col xs={6}><TextField name="picture" showInlineError placeholder="URL to picture" /></Col>
                <Col xs={6}><SelectField name="foods" showInlineError multiple /></Col>
              </Row>
              <SubmitField id={ComponentIDs.homeFormSubmit} value="Update" />
            </Card.Body>
          </Card>
        </AutoForm>
      </Col>
    </Container>
  ) : <LoadingSpinner />;
};

export default UserProfile;
