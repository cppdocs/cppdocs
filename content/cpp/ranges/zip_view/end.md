---
title: "std::ranges::zip_view<Views...>::end"
source_path: "cpp/ranges/zip_view/end"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/zip_view/iterator/) or a [sentinel](/cpp/ranges/zip_view/sentinel/) that compares equal to the end iterator of the [zip_view](/cpp/ranges/zip_view/).

## Declarations
```cpp
constexpr auto end()
requires (!(/*simple-view*/<Views> && ...);
```
_(since C++23)_

```cpp
constexpr auto end() const
requires (ranges::range<const Views> && ...);
```
_(since C++23)_

```cpp
template< class... Rs >
concept /*zip-is-common*/ =
(sizeof...(Rs) == 1 && (ranges::common_range<Rs> && ...))
||
(!(ranges::bidirectional_range<Rs> && ...) && (ranges::common_range<Rs> && ...))
||
((ranges::random_access_range<Rs> && ...) && (ranges::sized_range<Rs> && ...));
```
_(exposition only*)_

## Return value
An iterator or sentinel representing the end of the zip_view, as described above.

## Notes
[ranges::range](/cpp/ranges/range/)<const [ranges::zip_view](/cpp/ranges/zip_view/)<Views...>> is modeled if and only if for every type Vi in Views..., const Vi models [range](/cpp/ranges/range/).

## Example
This section is incompleteReason: no example

## See also
- [begin](/cpp/ranges/zip_view/begin/)
- [ranges::end](/cpp/ranges/end/)
