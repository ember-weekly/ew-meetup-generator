ew-meetup-generator
=============

# Description

A node command line script to pull

# Usage

To install `ew-meetup-generator`:

1. Clone this repository 
2. Run `npm install` from the directory
3. Run `touch env` to create a local environment file where the [Meetup.com API](https://www.meetup.com/meetup_api/) key will be stored.
4. Open up the newly created `env` file in a text editor and add the following JSON and your Meetup API key:
```
{
    "MEETUP_API_KEY": "<your-meetup-api-key-here>"
}
```

Once installed you can this command to see all possible commands

```
node ./bin/ew-meetup-generator --help
```

```
Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -l, --local         read local meetups.yml
    -o, --overwrite     overwrite local meetups.yml with remote
    -s, --start <days>  start days from now
    -d, --days <days>   number of days to include
    -p, --path <path>   path to the source yaml file
```

Most of the time you'll simply want to run `node ./bin/ew-meetup-generator -d <days>` where `<days>` is the number of days in the future to retrive meetups for.

e.g. Meetups for the next 14 days:

```
node ./bin/ew-meetup-generator -d 14
```
The meetups are read from the http://emberjs.com/community/meetups/ page's [source data YAML file](https://raw.githubusercontent.com/emberjs/website/master/data/meetups.yml). It used the meetup.com URLs to hit the meetup.com API.
