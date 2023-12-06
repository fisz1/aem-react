package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.aem.guides.wknd.spa.react.core.models.DataArt;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { DataArt.class,
        ComponentExporter.class }, resourceType = DataArtImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DataArtImpl implements DataArt {

    @ValueMapValue
    private Number limit;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/dataart";

    @Override
    public Number getLimit() {
        return limit;
    }

    @Override
    public String getExportedType() {
        return DataArtImpl.RESOURCE_TYPE;
    }

}