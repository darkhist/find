def get_exampledata():
    example = [
      {
        "id": "4cd29974-e48b-11e8-8478-fb9810f86b79",
        "created_at": "Sat Nov 10 02:02:55 UTC 2018",
        "title": "Software engineer (back end)",
        "location": "New York; Berlin",
        "type": "Full Time",
        "description": "<p>We’re Sesame and we’re building a transformative health care platform t…",
        "how_to_apply": "<p><a href=\"https://jobs.lever.co/sesamecare/26d259b5-5bcc-4ee9-a…",
        "company": "Sesame",
        "company_url": "http://sesamecare.com",
        "company_logo": "http://github-jobs.s3.amazonaws.com/7dd2a5e2-e48a-11e8-92e3-109c0e748f29.png",
        "url": "http://jobs.github.com/positions/4cd29974-e48b-11e8-8478-fb9810f86b79"
      },
      {
        "id": "dc428b94-e42e-11e8-91e2-23879ca9e8b0",
        "created_at": "Fri Nov 09 14:51:11 UTC 2018",
        "title": "Technology Solutions Developer",
        "location": "New York, New York 10001",
        "type": "Full Time",
        "description": "<p>As a member of the Technology Development Group, the Technology Solutio…",
        "how_to_apply": "<p>Apply Here: <a href=\"http://www.Click2apply.net/cyg9sy9m99zdm9…",
        "company": "New York University",

        # -------------------- NOTE!  --------------------
        # Github returns a null, I had turn that into
        # strings since pyton doesnt take NULL as a value
        "company_url": "null",  # Here
        "company_logo": "null",  # And Here
        "url": "http://jobs.github.com/positions/dc428b94-e42e-11e8-91e2-23879ca9e8b0"
      }
    ]

    return example
