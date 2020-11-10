# cypress-tags-example

Demo Cypress project using [cypress-tags](https://github.com/annaet/cypress-tags).

## Install

`npm install`

## Run Tests

This suite contains a series of tagged and untagged test cases. They don't do anything, but you can run them using:

```bash
npx cypress run
```

Some of the tests are tagged with tags such as `wip`, `smoke` and `regression`. You can use any string you like as a tag.

Here are some scenarios you can run.

* Run all `wip` tests:
```bash
CYPRESS_INCLUDE_TAGS=wip npx cypress run
```

* Run all tests tagged with `smoke` or `regression`:
```bash
CYPRESS_INCLUDE_TAGS=smoke,regression npx cypress run
```

* Run all tests apart from those tagged as `wip`:
```bash
CYPRESS_EXCLUDE_TAGS=wip npx cypress run
```

* Run all `smoke` and `regression` tests but not those marked as `wip`:
```bash
CYPRESS_INCLUDE_TAGS=smoke,regression CYPRESS_EXCLUDE_TAGS=wip npx cypress run
```