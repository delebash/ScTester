/**
 * Created by dan on 10/2/13.
 */
fixDates: function(values) {
    for( var field in values ) {
        if( isc.isA.Date(values[field]) )
        {
            values[field] = values[field].toSerializeableDate();
        }
        else if( isc.isAn.Object(values[field]) )
        {
            this.fixDates(values[field]);
        }
    }
},