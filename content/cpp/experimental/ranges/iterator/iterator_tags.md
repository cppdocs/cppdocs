---
title: "std::experimental::ranges::input_iterator_tag, std::experimental::ranges::output_iterator_tag, std::experimental::ranges::forward_iterator_tag, std::experimental::ranges::bidirectional_iterator_tag, std::experimental::ranges::random_access_iterator_tag"
source_path: "cpp/experimental/ranges/iterator/iterator_tags"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

Defines the category of an iterator. Each tag is an empty type and corresponds to one of the five iterator categories:

## Declarations
```cpp
struct input_iterator_tag {};
```

```cpp
struct output_iterator_tag {};
```

```cpp
struct forward_iterator_tag : public input_iterator_tag {};
```

```cpp
struct bidirectional_iterator_tag : public forward_iterator_tag {};
```

```cpp
struct random_access_iterator_tag : public bidirectional_iterator_tag {};
```

## Example
This section is incompleteReason: no example

## See also
- [input_iterator_tagoutput_iterator_tagforward_iterator_tagbidirectional_iterator_tagrandom_access_iterator_tagcontiguous_iterator_tag](/cpp/iterator/iterator_tags/)
