/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const Edit = (props) => {
    const {
        attributes: {
            header,
            buttonText,
            buttonURL,
            content,
            isInternalLink,
            hasButton
        },
        setAttributes,
    } = props;


    const blockProps = useBlockProps();

    const onChangeHeader = (value) => {
        setAttributes({ header: value });
    };

    const onChangeContent = (value) => {
        setAttributes({ content: value })
    }

    const onChangeButtonURL = (value) => {
        setAttributes({ buttonURL: value });
    };

    const onChangeButtonText = (value) => {
        setAttributes({ buttonText: value });
    };

    return (
        <div {...blockProps} className="fa-04-block">
            <div className="fa-emphasis-block-text-container">
                <RichText
                    tagName="div"
                    multiline="br"
                    placeholder={__(
                        'Header',
                        'femart-custom-block-04'
                    )}
                    value={header}
                    onChange={onChangeHeader}
                />
                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={__(
                        'Content',
                        'femart-custom-block-04'
                    )}
                    value={content}
                    onChange={onChangeContent}
                />
            </div>
            {hasButton &&
                <div className="fa-emphasis-block-button-container">
                    <button className="fa-media-emphasis-block-btn fa-media-emphasis-block-btn-edit wp-block-button__link wp-element-button">
                        {buttonText ? buttonText + " →" : "Read More →"}
                    </button>
                </div>
            }
            <InspectorControls>
                <PanelBody title="Button">
                    <ToggleControl
                        label="Button"
                        help={
                            hasButton
                                ? 'This block has a button.'
                                : 'This block does not have a button.'
                        }
                        checked={hasButton}
                        onChange={(newValue) => {
                            setAttributes({ hasButton: newValue });
                        }}
                    />
                    <ToggleControl
                        label="Internal Link"
                        help={
                            isInternalLink
                                ? 'This is an internal link.'
                                : 'This links outside of FemArt.'
                        }
                        checked={isInternalLink}
                        onChange={(newValue) => {
                            setAttributes({ isInternalLink: newValue });
                        }}
                    />
                    <TextControl
                        label="Link"
                        help={isInternalLink ? "Page Slug" : "FULL URL"}
                        value={buttonURL}
                        onChange={onChangeButtonURL}
                    />
                    <TextControl
                        label="Text"
                        value={buttonText}
                        onChange={onChangeButtonText}
                    />
                </PanelBody>
            </InspectorControls>
        </div>
    );
};

export default Edit;
