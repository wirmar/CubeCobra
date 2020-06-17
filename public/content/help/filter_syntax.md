# Filter syntax guide

## General

You can combine any number of filters together using `AND` or `OR`. Operators are case-insensitive, as are all filtering conditions (`TYPE:instant and o:DESTROY` will still work, for example).

#### Examples:

`t:instant OR t:sorcery`	Cards that are either instants or sorceries.
`t:instant t:tribal`	Cards that are both instants and tribal.

-----
Text without a filtering condition is treated as a name. You can use quotes to require an exact match.

#### Examples:

`goblin blood`	Cards whose names contain both "blood" and "goblin".
`"goblin blood"`	Cards whose names contain exactly "goblin blood".
`o:destroy o:target o:creature`	Cards whose oracle text contains each of "destroy", "target", and "creature".
`o:"destroy target creature"`	Cards whose oracle text contains exactly "destroy target creature".

-----
You can also use parentheses to combine clauses.

#### Examples:

`t:instant OR (t:creature o:flash)`	Cards which are instants, or cards which are creatures with flash.
`(t:artifact t:creature) OR (-t:creature o:create)`	Cards which are artifact creatures, or cards that aren't creatures and have "create" in their oracle text.

-----
You can put - before anything to negate it.

#### Examples:

`-c:w`	Cards that are not white.
`-o:draw`	Cards which do not have draw in their oracle text.
`-t:creature`	Cards which are not creatures.
`-mox`	Cards whose names do not include "mox".