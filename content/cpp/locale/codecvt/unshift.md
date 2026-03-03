---
title: "std::codecvt<InternT,ExternT,StateT>::unshift, do_unshift"
source_path: "cpp/locale/codecvt/unshift"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_unshift of the most derived class.

## Declarations
```cpp
public:
result unshift( StateT& state, ExternT* to, ExternT* to_end,
ExternT*& to_next ) const;
```

```cpp
protected:
virtual result do_unshift( StateT& state, ExternT* to, ExternT* to_end,
ExternT*& to_next ) const;
```

## Return value
A value of type [std::codecvt_base::result](/cpp/locale/codecvt_base/), indicating the success status as follows:

## Notes
This function is called by [std::basic_filebuf::close()](/cpp/io/basic_filebuf/close/) and in other situations when finalizing a state-dependent multibyte character sequence.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 305 | C++98 | std::codecvt<wchar_t, char, std::mbstate_t>::do_unshiftwas required not to write any character | not required |
| LWG 380 | C++98 | the meaning of returning partial was 'more characters need tobe supplied to complete termination', but no character is supplied | corrected to indicatinginsufficient buffer space |
| LWG 381 | C++98 | state was not required to be valid, anderror is returned if state is invalid | state is required to be valid, andreturning error indicates an error |
| LWG 664 | C++98 | std::codecvt<char, char, std::mbstate_t>::do_unshiftwas required not to write any character | not required |
| LWG 665 | C++98 | std::codecvt<char, char, std::mbstate_t>::do_unshiftwas required to return noconv | not required |

## See also
- [wcrtomb](/cpp/string/multibyte/wcrtomb/)
- [do_out](/cpp/locale/codecvt/out/)
