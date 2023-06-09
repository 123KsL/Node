/**
 * Create an object.
 *
 * @param {string} issuerId The issuer ID being used for this request.
 * @param {string} classSuffix Developer-defined unique ID for the pass class.
 * @param {string} objectSuffix Developer-defined unique ID for the pass object.
 *
 * @returns {string} The pass object ID: `${issuerId}.${objectSuffix}`
 */
 async  function   CreateObject(issuerId, classSuffix, objectSuffix) {
  let response;

  // Check if the object exists
  try {
    response = await this.httpClient.request({
      url: `${this.objectUrl}/${issuerId}.${objectSuffix}`,
      method: 'GET'
    });

    console.log(`Object ${issuerId}.${objectSuffix} already exists!`);

    return `${issuerId}.${objectSuffix}`;
  } catch (err) {
    if (err.response && err.response.status !== 404) {
      // Something else went wrong...
      console.log(err);
      return `${issuerId}.${objectSuffix}`;
    }
  }

  // See link below for more information on required properties
  // https://developers.google.com/wallet/tickets/boarding-passes/rest/v1/flightobject
  let newObject = {
    'id': `${issuerId}.${objectSuffix}`,
    'classId': `${issuerId}.${classSuffix}`,
    'state': 'ACTIVE',
    'heroImage': {
      'sourceUri': {
        'uri': 'https://farm4.staticflickr.com/3723/11177041115_6e6a3b6f49_o.jpg'
      },
      'contentDescription': {
        'defaultValue': {
          'language': 'en-US',
          'value': 'Hero image description'
        }
      }
    },
    'textModulesData': [
      {
        'header': 'Text module header',
        'body': 'Text module body',
        'id': 'TEXT_MODULE_ID'
      }
    ],
    'linksModuleData': {
      'uris': [
        {
          'uri': 'http://maps.google.com/',
          'description': 'Link module URI description',
          'id': 'LINK_MODULE_URI_ID'
        },
        {
          'uri': 'tel:6505555555',
          'description': 'Link module tel description',
          'id': 'LINK_MODULE_TEL_ID'
        }
      ]
    },
    'imageModulesData': [
      {
        'mainImage': {
          'sourceUri': {
            'uri': 'http://farm4.staticflickr.com/3738/12440799783_3dc3c20606_b.jpg'
          },
          'contentDescription': {
            'defaultValue': {
              'language': 'en-US',
              'value': 'Image module description'
            }
          }
        },
        'id': 'IMAGE_MODULE_ID'
      }
    ],
    'barcode': {
      'type': 'QR_CODE',
      'value': 'QR code'
    },
    'locations': [
      {
        'latitude': 37.424015499999996,
        'longitude': -122.09259560000001
      }
    ],
    'passengerName': 'Passenger name',
    'boardingAndSeatingInfo': {
      'boardingGroup': 'B',
      'seatNumber': '42'
    },
    'reservationInfo': {
      'confirmationCode': 'Confirmation code'
    }
  };

  response = await this.httpClient.request({
    url: this.objectUrl,
    method: 'POST',
    data: newObject
  });

  console.log('Object insert response');
  console.log(response);

  return `${issuerId}.${objectSuffix}`;
}
CreateObject('3388000000022232021','123456789','123456789')