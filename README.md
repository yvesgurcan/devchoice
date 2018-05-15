# [devchoice](https://devchoice.yvesgurcan.com)

## How to add suggestions

* Create a new markdown file in `/_podcasts`. The name of the file should follow this pattern: `YYYY-MM-DD-the-name-of-the-episode.md`, where the prepended date corresponds to the date where the suggestion will be publicly displayed.

* A list of key-values can be used in the [front matter](https://jekyllrb.com/docs/frontmatter/) of the file:
```
---
hidden: is_hidden
episode: episode_title
podcast: podcast_name
description: short_description
link: url_to_episode_page
ext: file_extension_of_the_locally_hosted_image
image: url_of_remotely_hosted_image
categories: [an, array, of, categories]
length: 
media: url_of_the_media_file
type: the_type_of_the_media_file
explicit: is_the_show_explicit
notes: full_show_notes
---
```

### Details about front matter keys

#### Special values

The following keys are internal to Jekyll and should not be overriden in the front matter:
* title

#### hidden



#### ext
The default value of `ext` is `.jpg`.
This key is ignored if the `image` key exists.
The site assumes that the image can be found locally at `/assets/images/the-name-of-the-episode.file_extension` where `the-name-of-the-episode` is set by `episode` and `file_extension` corresponds to `ext`.

#### content

#### length

#### duration

#### type
The default value of `type` is `audio/mpeg`.

#### explicit
The default value of `explicit` is `no`.
The `explicit` key has 3 valid values for iTunes: `no`, `yes`, `clean` (which corresponds to the censored version of an explicit show).